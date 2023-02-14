function createJuice(fruits){
  console.log(fruits + "を受け取りました。ジュースにして返します");
  return fruits + "ジュース"
}

let orangeJuice = "みかん";

console.log(createJuice(orangeJuice) + "が届きました");
