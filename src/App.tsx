import Header from "./template/header/Header";

import "./App.css";
import Mode from "./template/mode/Mode";

function App() {
  return (
    <section className="flex flex-col min-h-screen h-screen">
      <Header />
      <main
        className="relative height-full overflow-auto"
        style={{ height: "200vh" }}
      >
        <div className="overflow-auto">
          <h1 className="text-3xl font-bold underline text-black">
            <Mode />
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world! Hello world!
            Hello world! Hello world! Hello world! Hello world!
          </h1>
          test
        </div>
      </main>
    </section>
  );
}

export default App;
