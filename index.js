
const sectionKikoUpstaff = document.createElement("div");
sectionKikoUpstaff.style.display = "flex";
sectionKikoUpstaff.style.fontFamily = "Arial, Helvetica, sans-serif";
sectionKikoUpstaff.style.margin = "20px auto";
sectionKikoUpstaff.style.width = "calc(50%)";

const paragraphOne = document.createElement("p");
paragraphOne.style.padding = "1rem";
paragraphOne.style.flex = "1";
paragraphOne.style.borderRadius = "10px";
paragraphOne.style.boxShadow = "1px 1px 5px 5px #f1f1f1";
paragraphOne.style.textAlign = "center";
paragraphOne.style.display = "flex";
paragraphOne.style.lineHeight = "1.5";
paragraphOne.style.alignItems = "center";
paragraphOne.appendChild(document.createTextNode("Test task. Create JavaScript Code to Insert a Styled Div on the Categories Page. Write JavaScript code that will place a div element on the categories page. The div should occupy 2 columns after the 4th product. On narrower screens with 3 columns, the div should take up 2/3 of the width, and in the mobile version, the div should span the entire width. Inside the div, include random text that is centered both horizontally and vertically. Style the div to resemble the product style, applying box-shadow and rounded corners. All CSS styles should be generated using JavaScript."));
sectionKikoUpstaff.appendChild(paragraphOne);

const liKiko = document.createElement("li");
liKiko.appendChild(sectionKikoUpstaff);
const liFourthProduct = document.querySelector('.products.list.items.product-items li:nth-child(4)')
liFourthProduct.insertAdjacentElement("afterend", liKiko)

if (window.matchMedia('(min-width: 480px) and (max-width: 980px)').matches) {
    sectionKikoUpstaff.style.width = "calc(66%)";
}
if (window.matchMedia('(max-width: 479px)').matches) {
    sectionKikoUpstaff.style.width = "100%";
}



