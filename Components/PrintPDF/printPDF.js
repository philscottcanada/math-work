import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function printPDF(pdfRef, questions){
    var pages =  (questions / 20) + 1;
    const input = pdfRef.current;
    html2canvas(input, {
      windowWidth: 760,
      width: 760,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'letter', true);
      const pdfPageWidth = pdf.internal.pageSize.getWidth();
      const pdfPageHeight = pdf.internal.pageSize.getHeight();
  
      let position = 5
      let ratio;
      
      //apply ratio or else the image stretches
      if (pages == 2){ratio = 0.65}
      else if (pages == 3){ratio = 0.83}
      else if (pages == 4){ratio = 0.91}
      else if (pages == 5){ratio = 0.97}
      else {ratio = 1.00}

      for (var i = 0; i < pages; i++) {
        if (i > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 4, position, pdfPageWidth, pdfPageHeight * pages * ratio);
        position -= (pdfPageHeight+7);
      }
      pdf.save('math.pdf');
    })
}