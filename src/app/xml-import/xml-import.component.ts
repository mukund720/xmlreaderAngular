import { Component, OnInit } from '@angular/core';
import * as converter from 'xml-js';
@Component({
  selector: 'app-xml-import',
  templateUrl: './xml-import.component.html',
  styleUrls: ['./xml-import.component.css']
})

export class XmlImportComponent implements OnInit {
  xml: string;
  outputXml: any;
  inputXml: any;
  list: any = []
  constructor() {

  }

  ngOnInit() {
  }

  uploadedFile: any = '';
  getFilename(name) {
    return name.substring(0, name.lastIndexOf('.'));
  }
  getFileExtension(filename) {
    return (filename != '' && filename != undefined && filename != null) ? filename.split('.').pop() : '';
  }
  selectFile(event) {
    var file: File = event.target.files[0];
    this.fileType = this.getFileExtension(file.name);
    this.fileName = this.getFilename(file.name);
    this.file = file.name;


    if (this.fileType != 'xml') {
      alert("Wrong XML");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let xml = e.target.result;
      this.inputXml = xml;
      let result1 = converter.xml2json(xml, { compact: true, spaces: 2 });

      const JSONData = JSON.parse(result1);
      this.xml = JSONData;
      this.list = [];
      let list: any = [];
      list = Array.isArray(JSONData.employees.employee) ? JSONData.employees.employee : [];
      let index:number=0;
      if (list) {
        for (let i of list) {
          i.class_name='info';
          if(index%2==0)
          {
            i.class_name='success';
          }
          let t: any = {
            class_name:i.class_name?i.class_name:'',
            id: i._attributes.id ? i._attributes.id : '',
            name: i.name._text ? i.name._text : '',
            email: i.email._text ? i.email._text : '',
            mobile: i.mobile._text ? i.mobile._text : '',
          }
          this.list.push(t)
          index++;
        }
      }



    }

    reader.readAsText(event.target.files[0])
  }
  fileType: any = ''
  fileName: any = '';
  file: any = '';

}
