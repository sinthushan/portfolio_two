import { Record, recordObj } from "./components/record";

function App() {
  const records: recordObj[] = [
    { title: "Home", picture: "blue" },
    { title: "About Me", picture: "green" },
    { title: "Projects", picture: "red" },
  ];
  return (
    <div className="container">
      {records.map((record, index) => {
        return (
          <Record key={index} title={record.title} picture={record.picture} />
        );
      })}
    </div>
  );
}

export default App;
