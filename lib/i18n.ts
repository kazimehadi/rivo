import {useCart} from './store'
const D:Record<'en'|'bn',Record<string,string>>={
en:{nav_shop:'Shop',nav_about:'About',nav_contact:'Contact',cart:'Cart',menu:'Menu',
h1:'Sharp shirts and clean pants, cut for Dhaka.',sub:'Formal solids, stripes and checks in sizes M, L and XL. Choose your fit and confirm your order on WhatsApp.',
cta_shop:'Shop the collection',cta_chat:'Chat on WhatsApp',s1t:'Navy shirt, white pants',s1s:'A clean everyday pairing.',s2t:'Maroon with crisp white',s2s:'Stand out without trying hard.',look:'Shop the look',
mq:'Formal solids|Stripes and checks|Made for Dhaka|Sizes M, L, XL|Order on WhatsApp',
cats_h:'Three collections, one tidy wardrobe.',cat_shirt:'Solid shirts',cat_pant:'Formal pants',cat_check:'Stripe and check shirts',all:'All',size:'Size',add:'Add to cart',order:'Order on WhatsApp',
cart_title:'Your cart',cart_empty:'Your cart is empty. Pick a shirt or pant to start.',total:'Total',
about_h:'A Dhaka label that starts with the basics, done properly.',about_p:'Rivo makes formal shirts and pants that sit well and wear easily, from the first meeting of the day to the last.',
f1t:'Easy fit',f1d:'Comfortable cuts in M, L and XL.',f2t:'Order in chat',f2d:'Fill your cart, then send it to us on WhatsApp.',f3t:'Delivery across Bangladesh',f3d:'We confirm the details with you before dispatch.',
foot_h:'Ready to dress sharper?',wa_btn:'WhatsApp +880 1677 878818',rights:"© Rivo, Men's wear, Dhaka"},
bn:{nav_shop:'দোকান',nav_about:'আমাদের কথা',nav_contact:'যোগাযোগ',cart:'কার্ট',menu:'মেনু',
h1:'ঢাকার জন্য তৈরি পরিপাটি শার্ট আর প্যান্ট।',sub:'ফরমাল সলিড, স্ট্রাইপ আর চেক শার্ট ও প্যান্ট, সাইজ M, L ও XL। পছন্দের সাইজ বেছে হোয়াটসঅ্যাপে অর্ডার কনফার্ম করুন।',
cta_shop:'কালেকশন দেখুন',cta_chat:'হোয়াটসঅ্যাপে চ্যাট',s1t:'নেভি শার্টের সাথে সাদা প্যান্ট',s1s:'প্রতিদিনের জন্য পরিপাটি জুটি।',s2t:'মেরুনের সাথে ঝকঝকে সাদা',s2s:'সহজেই নজর কাড়ুন।',look:'লুকটি দেখুন',
mq:'ফরমাল সলিড|স্ট্রাইপ ও চেক|ঢাকার জন্য তৈরি|সাইজ M, L, XL|হোয়াটসঅ্যাপে অর্ডার',
cats_h:'তিনটি কালেকশন, একটি পরিপাটি ওয়ার্ডরোব।',cat_shirt:'সলিড শার্ট',cat_pant:'ফরমাল প্যান্ট',cat_check:'স্ট্রাইপ ও চেক শার্ট',all:'সব',size:'সাইজ',add:'কার্টে যোগ করুন',order:'হোয়াটসঅ্যাপে অর্ডার করুন',
cart_title:'আপনার কার্ট',cart_empty:'আপনার কার্ট খালি। শুরু করতে একটি শার্ট বা প্যান্ট বেছে নিন।',total:'মোট',
about_h:'ঢাকার একটি লেবেল, যা শুরু করেছে মৌলিক পোশাক দিয়ে, ঠিকঠাকভাবে।',about_p:'রিভো বানায় ফরমাল শার্ট ও প্যান্ট, যা সুন্দরভাবে ফিট করে এবং সারাদিন পরতে আরাম দেয়।',
f1t:'আরামদায়ক ফিট',f1d:'M, L ও XL সাইজে আরামদায়ক কাট।',f2t:'চ্যাটেই অর্ডার',f2d:'কার্ট ভরে হোয়াটসঅ্যাপে আমাদের পাঠিয়ে দিন।',f3t:'সারা দেশে ডেলিভারি',f3d:'পাঠানোর আগে আমরা আপনার সাথে সব বিস্তারিত নিশ্চিত করি।',
foot_h:'আরও স্মার্ট হতে প্রস্তুত?',wa_btn:'হোয়াটসঅ্যাপ +৮৮০ ১৬৭৭ ৮৭৮৮১৮',rights:'© রিভো, পুরুষদের পোশাক, ঢাকা'}}
const dg=(s:string)=>s.replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[+d])
export function useI18n(){
  const lang=useCart(s=>s.lang)
  const n=(x:number)=>{const s=x.toLocaleString('en-IN');return lang==='bn'?dg(s):s}
  return{lang,t:(k:string)=>D[lang][k],n,tk:(x:number)=>'৳'+n(x)}
}
