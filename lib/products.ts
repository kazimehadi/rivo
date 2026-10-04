export type Cat='shirt'|'pant'|'check'
export type Product={id:number;img:string;cat:Cat;price:number;en:string;bn:string;den:string;dbn:string}
const P=(id:number,img:string,cat:Cat,price:number,en:string,bn:string,den:string,dbn:string):Product=>({id,img:`/products/${img}.jpg`,cat,price,en,bn,den,dbn})
export const PRODUCTS:Product[]=[
P(1,'navy-shirt','shirt',1099,'Navy Solid Shirt','নেভি সলিড শার্ট','Deep navy with a soft, textured finish. Pairs with white or grey pants.','গাঢ় নেভি রঙের নরম টেক্সচারের শার্ট। সাদা বা ধূসর প্যান্টের সাথে দারুণ মানায়।'),
P(2,'white-shirt','shirt',899,'White Oxford Shirt','সাদা অক্সফোর্ড শার্ট','A crisp white shirt with a chest pocket. Goes with everything.','বুক পকেটসহ ঝকঝকে সাদা শার্ট। সবকিছুর সাথেই মানানসই।'),
P(3,'olive-shirt','shirt',1149,'Olive Solid Shirt','অলিভ সলিড শার্ট','A relaxed olive shirt with a natural weave look.','প্রাকৃতিক বুননের আরামদায়ক অলিভ রঙের শার্ট।'),
P(4,'brown-shirt','shirt',1199,'Brown Solid Shirt','ব্রাউন সলিড শার্ট','A rich chocolate brown shirt with a clean, smooth finish.','পরিপাটি ফিনিশের গাঢ় চকলেট ব্রাউন শার্ট।'),
P(5,'grey-pant','pant',1299,'Grey Formal Pant','ধূসর ফরমাল প্যান্ট','A straight-cut grey pant with a sharp front crease.','সামনে ক্রিজসহ সোজা কাটের ধূসর প্যান্ট।'),
P(6,'black-pant','pant',1349,'Black Formal Pant','কালো ফরমাল প্যান্ট','A black pleated pant for office and evenings out.','অফিস ও সন্ধ্যার আউটিংয়ের জন্য কালো প্লিটেড প্যান্ট।'),
P(7,'brown-pant','pant',1399,'Brown Formal Pant','ব্রাউন ফরমাল প্যান্ট','A warm brown pant with a straight leg and neat crease.','সোজা পায়া ও পরিপাটি ক্রিজের উষ্ণ ব্রাউন প্যান্ট।'),
P(8,'brown-check','check',1249,'Brown Check Shirt','ব্রাউন চেক শার্ট','A soft brown plaid shirt with a chest pocket.','বুক পকেটসহ নরম ব্রাউন চেক শার্ট।'),
P(9,'pink-stripe','check',1099,'Pink Stripe Shirt','পিংক স্ট্রাইপ শার্ট','Pink and white stripes. Fresh, light and easy.','গোলাপি-সাদা স্ট্রাইপ। হালকা, সতেজ ও আরামদায়ক।'),
P(10,'blue-stripe','check',1149,'Blue Stripe Shirt','ব্লু স্ট্রাইপ শার্ট','Sky blue and white stripes for a clean office look.','অফিসের পরিপাটি লুকের জন্য আকাশি-সাদা স্ট্রাইপ।')]
export const taka=(n:number)=>'৳'+n.toLocaleString('en-IN')
export const WA='8801677878818'
export const orderLink=(l:{id:number;size:string;qty:number}[])=>{
  const g=(id:number)=>PRODUCTS.find(p=>p.id===id)!
  const total=l.reduce((a,x)=>a+g(x.id).price*x.qty,0)
  const m='Hello Rivo! I would like to order:\n'+l.map(x=>`- ${g(x.id).en}, size ${x.size} x${x.qty}: ${taka(g(x.id).price*x.qty)}`).join('\n')+`\nTotal: ${taka(total)}`
  return `https://wa.me/${WA}?text=${encodeURIComponent(m)}`
}
