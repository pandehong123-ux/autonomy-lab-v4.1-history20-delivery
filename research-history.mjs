// Read-only primary-source check for the history expansion. No app dependency.
const sources = [
 ['futurama','https://www.thehenryford.org/collections-and-research/digital-collections/artifact/182489/'],
 ['dartmouth','http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html'],
 ['shakey','https://www.sri.com/hoi/shakey-the-robot/'],
 ['bosch','https://www.bosch-mobility.com/en/company/milestones/'],
 ['navlab','https://csd.cmu.edu/news/then-and-now-the-2850mile-nohands-road-trip'],
 ['alvinn','https://papers.nips.cc/paper/1988/hash/812b4ba287f5ee0bc9d43bbf5bbe87fb-Abstract.html'],
 ['darpa','https://www.darpa.mil/news/2014/grand-challenge-ten-years-later'],
 ['stanley','https://robots.stanford.edu/papers/thrun.stanley05.pdf'],
 ['boss','https://www.ri.cmu.edu/publications/autonomous-driving-in-urban-environments-boss-and-the-urban-challenge/'],
 ['deepblue','https://www.ibm.com/history/deep-blue'],
 ['alexnet','https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html'],
 ['waymo','https://waymo.com/about/'],
 ['kitti','https://www.cvlibs.net/datasets/kitti/'],
 ['cityscapes','https://www.cityscapes-dataset.com/'],
 ['endtoend','https://arxiv.org/abs/1604.07316'],
 ['alphago','https://deepmind.google/research/breakthroughs/alphago/'],
 ['transformer','https://arxiv.org/abs/1706.03762'],
 ['bert','https://arxiv.org/abs/1810.04805'],
 ['nuscenes','https://arxiv.org/abs/1903.11027'],
 ['bevformer','https://arxiv.org/abs/2203.17270'],
 ['uniad','https://arxiv.org/abs/2212.10156'],
 ['emma','https://arxiv.org/abs/2410.23262'],
 ['perceptron','https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon'],
 ['kalman','https://doi.org/10.1115/1.3662552'],
 ['sae','https://www.sae.org/standards/content/j3016_201401/'],
 ['imagenet','https://www.image-net.org/about.php']
];
const strip = text => text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const selected = process.argv.slice(2);
const results = await Promise.all(sources.filter(([id])=>!selected.length||selected.includes(id)).map(async ([id,url]) => {
 try {
  const response = await fetch(url,{signal:AbortSignal.timeout(22000)});
  if(response.headers.get('content-type')?.includes('pdf')) return {id,url,status:response.status,pdf:true};
  const html = await response.text(), plain = strip(html);
  const at = plain.search(/Abstract:|Shakey was|In 1995|Futurama|1955|1978|Dartmouth|2016|2017|2005|1958|1960|1988|2012/i);
  return {id,url:response.url,status:response.status,title:html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],text:plain.slice(Math.max(0,at-300), Math.max(0,at-300)+2400)};
 } catch(error) { return {id,url,error:error.message}; }
}));
for(const result of results) console.log(JSON.stringify(result));
