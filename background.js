// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractSvgs,
  });
});

const extractSvgs = (nextState) => {
  const svgs = document.querySelectorAll("svg");
  console.log("alert: " + svgs.length);

  var myWindow = window.open("", "_blank");
  myWindow.style =
    "width: 100%; height: 100%; background-color: black; color: white;";
  let container = myWindow.document.createElement("div");
  container.id = "svg-container";
  myWindow.document.body.appendChild(container);

  // TODO load css from file
  container.style =
    "display: flex; flex-direction: row; gap: 16px; max-width: 100%; flex-wrap: wrap; justify-content: center; align-items: center;";

  svgs.forEach((svg, index) => {
    const svgCard = myWindow.document.createElement("div");

    svgCard.id = "svg-card-" + index;
    svgCard.style =
      "max-width: 300px;  min-height: 100px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);  border: 1px solid #E1F2FE; border-radius: 8px; background-color: white; display: flex; flex-direction: column; padding: 16px; align-items: center; justify-content: space-around;";
    container.appendChild(svgCard);

    let svgElement = myWindow.document.createElement("svg");
    svgElement.innerHTML = svg.outerHTML;
    svgCard.appendChild(svgElement);

    let downloadButton = myWindow.document.createElement("button");
    downloadButton.style =
      "width: 100%; height: 30px; margin-top: 8px 16px; border: 0px; border-radius: 8px; background-color: #E1F2FE; color: black; cursor: pointer;";
    downloadButton.innerHTML = "Download";
    svgCard.appendChild(downloadButton);

    downloadButton.addEventListener("click", () => {
      const svgData = svg.outerHTML;
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = myWindow.document.createElement("a");
      a.href = url;
      a.download = `svg-${index}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    });
  });
};
