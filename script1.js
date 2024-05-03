function downloadResume() {
   
    const resumeUrl = "resume.pdf";

    
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vyshnavi_Resume.pdf"; 
    link.target = "_blank";


    document.body.appendChild(link);
    link.click();

    
    document.body.removeChild(link);
}


