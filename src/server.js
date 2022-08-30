import { createServer } from "miragejs";
export function makeServer() {
  let server = createServer({
    routes() {
      this.urlPrefix = "http://localhost:3030";
        this.get("/scoops", () => ([
                { name: "Chocolate", imagePath: "/images/chocolate.png" },
                { name: "Vanilla", imagePath: "/images/vanilla.png" },
            ]
        ))
    },
  });
  return server;
}
