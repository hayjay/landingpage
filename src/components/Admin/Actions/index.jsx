import React from "react";
import jsPdf from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";

import "./style.css";

export default function Actions(props) {
  let csvData;

  const exportToPdf = (users) => {
    let data = users.map((user, index) => [
      index + 1,
      user.lastName,
      user.email,
      user.course,
    ]);
    let doc = new jsPdf();
    let date = new Date();
    let today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    doc.text(today, 10, 10);
    doc.moveTo(50, 18);
    doc.setFontSize(30);
    doc.text("Registered Users", 65, 18);
    // doc.moveTo(10, 23);
    doc.autoTable({
      startY: 30,
      head: [["S/N", "Full Names", "Emails", "Courses"]],
      body: data,
    });
    doc.save("registered users.pdf");
  };

  const exportToExcel = () => {
    let heads = ["Full Names", "Emails", "Courses"];
    let data = [];

    data.push(heads);
    for (let user of props.users) {
      data.push([user.lastName, user.email, user.course]);
    }
    csvData = data;
  };
  exportToExcel();
  return (
    <div className="actions d-flex">
      <h5 style={{ fontSize: "16px" }}>
        Actions:{" "}
      </h5>
      <span className="buttons">
        <button onClick={() => exportToPdf(props.users)}>Export to PDF</button>
        <CSVLink
          data={csvData}
          filename={"registered users.csv"}
          target="_blank"
        >
          <button>Export to Excel</button>
        </CSVLink>
      </span>
    </div>
  );
}
