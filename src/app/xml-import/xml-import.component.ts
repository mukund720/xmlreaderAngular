import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
const xmlString = `
  <foo:EntryItem>
    <foo:Id>1</foo:Id>
    <foo:Name>One</foo:Name>
  </foo:EntryItem>
`;
@Component({
  selector: 'app-xml-import',
  templateUrl: './xml-import.component.html',
  styleUrls: ['./xml-import.component.css']
})

export class XmlImportComponent implements OnInit {
  xml: string;

  constructor() { 
   
  }

  ngOnInit() {
  }

  uploadedFile: any = '';
  getFilename(name) {
    return name.substring(0, name.lastIndexOf('.'));
  }
  getFileExtension(filename) {
    return (filename!=''&&filename!=undefined&&filename!=null)?filename.split('.').pop():'';
  }
  fileType: any = ''
  fileName: any = '';
  file: any = '';
 readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    this.fileType = this.getFileExtension(file.name);
    this.fileName = this.getFilename(file.name);
    this.file = file.name;


    if (this.fileType!='xml') {
      alert("Wrong XML");
      return;
    }
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.uploadedFile = myReader.result;
      this.ReadNow();
    }
    myReader.readAsDataURL(file);
  }
  ReadNow()
  {
    console.log(this.uploadedFile);
    const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(this.uploadedFile, (err, result) => {
      this.xml = result;
    });
  }
}
