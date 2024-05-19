const placesInTunisia = [
    {
        name: "Tunis",
        description: "The capital city of Tunisia, Tunis is a vibrant metropolis blending modernity with rich history. Explore the medina, visit the Bardo Museum, and enjoy Tunisian cuisine."
    },
    {
        name: "Sidi Bou Said",
        description: "A picturesque coastal town known for its blue-and-white architecture, Sidi Bou Said offers stunning views of the Mediterranean Sea. Visit the iconic Cafe des Nattes and wander through its charming streets."
    },
    {
        name: "Carthage",
        description: "Once a powerful ancient city, Carthage is now a UNESCO World Heritage Site. Explore its ruins, including the Baths of Antoninus, Carthage National Museum, and the Punic Ports."
    },
    {
        name: "Djerba",
        description: "An island off the southeast coast of Tunisia, Djerba is known for its beautiful beaches, historic sites, and vibrant culture. Visit the Ghriba Synagogue, explore Houmt Souk, and relax on Sidi Mahrez Beach."
    },
    {
        name: "Tozeur",
        description: "Located in the Sahara Desert, Tozeur is famous for its unique architecture, palm groves, and desert landscapes. Explore the medina, take a camel ride, and visit the nearby oasis towns."
    }
];

const distination = document.querySelector("#distination")
placesInTunisia.forEach(function(v,i){
  const div = document.createElement("div")
  const h1 = document.createElement("h2")
  h1.setAttribute("class", "titles");
  h1.innerHTML = v.name
  const p = document.createElement("p")
  p.innerHTML = v.description
  div.appendChild(h1)
  div.appendChild(p)
  distination.appendChild(div)
})
