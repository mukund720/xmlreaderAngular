import { Component, OnInit } from '@angular/core';
import * as converter from 'xml-js';

@Component({
  selector: 'app-xml-import2',
  templateUrl: './xml-import2.component.html',
  styleUrls: ['./xml-import2.component.css']
})
export class XmlImport2Component implements OnInit {
  list: any = []

  constructor() { }

  ngOnInit() {
  }
  getFilename(name) {
    return name.substring(0, name.lastIndexOf('.'));
  }
  getFileExtension(filename) {
    return (filename != '' && filename != undefined && filename != null) ? filename.split('.').pop() : '';
  }
  selectFile(event) {
    var file: File = event.target.files[0];
     if (this.getFileExtension(file.name) != 'xml') {
      alert("Wrong XML");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let xml = e.target.result;
      let result1 = converter.xml2json(xml, { compact: true, spaces: 2 });
// console.log(xml)
// console.log(result1)
      let JSONData:any = JSON.parse(result1);
      console.log(JSONData);
      this.list = [];
      
      if(Array.isArray(JSONData.students.student))
      {
        for(let i of JSONData.students.student)
        {
console.log(i);
let tempdata:any={
  email:i.email._text,
  mobile:i.mobile._text,
  name:i.name._text,
}
this.list.push(tempdata);
        }
      }
    
    }

    reader.readAsText(event.target.files[0])
  }
}
