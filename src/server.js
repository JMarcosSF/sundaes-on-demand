import { createServer } from "miragejs";

export function makeServer() {
  return  createServer({
    routes() {
      this.urlPrefix = "http://localhost:3030";
      this.get("/scoops", () => [
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ]);
      this.get("/toppings", () => [
        { name: "Cherries", imagePath: "/images/cherries.png" },
        { name: "M&M's", imagePath: "/images/m-and-ms.png" },
        { name: "Hot Fudge", imagePath: "/images/hot-fudge.png" },
      ]);
    },
  });
}
