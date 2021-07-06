import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { QueryBuilderConfig } from '../components/query-builder/query-builder.interfaces'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng9';

  public queryCtrl: FormControl;

  public allowRuleset: boolean = true;
  public allowCollapse: boolean;
  public persistValueOnFieldChange: boolean = false;
  public currentConfig: QueryBuilderConfig;

  public dataTypeArr = ['AccountConfig','InvoiceRule']

  constructor(
    private formBuilder: FormBuilder
  ){
    this.queryCtrl = this.formBuilder.control(this.query);
    this.currentConfig = this.config;
  }

  public query = {
    condition: 'and',
    dataType: 'AccountConfig',
    rules: [
      // {field: 'age', operator: '=', value: 'Bob'},
      // {field: 'gender', operator: '>=', value: 'm'}
    ]
  };

public config: QueryBuilderConfig = {
    // fields: {
    //   age: {name: 'Age', type: 'number'},
    //   gender: {
    //     name: 'Gender',
    //     type: 'category',
    //     options: [
    //       {name: 'Male', value: 'm'},
    //       {name: 'Female', value: 'f'}
    //     ]
    //   },
    //   name: {name: 'Name', type: 'string'},
    //   notes: {name: 'Notes', type: 'textarea', operators: ['=', '!=']},
    //   educated: {name: 'College Degree?', type: 'boolean'},
    //   birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
    //     defaultValue: (() => new Date())
    //   },
    //   school: {name: 'School', type: 'string', nullable: true},
    //   occupation: {
    //     name: 'Occupation',
    //     type: 'category',
    //     options: [
    //       {name: 'Student', value: 'student'},
    //       {name: 'Teacher', value: 'teacher'},
    //       {name: 'Unemployed', value: 'unemployed'},
    //       {name: 'Scientist', value: 'scientist'}
    //     ]
    //   }
    // }
    fields: {
        active: {name: 'Active', type: 'number'},
        currency: { name: 'Currency', type: 'string' },
        overchargeamount: { name: 'OverchargeAmount', type: 'string' },
        overchargetype: { name: 'OverchargeType', type: 'string' },
        underchargeamount: { name: 'UnderchargeAmount', type: 'string' },
        underchargetype: { name: 'UnderchargeType', type: 'string' },
        runaudit: { name: 'RunAudit', type: 'string' },
        runtmsmatch: { name: 'RunTmsMatch', type: 'string' },
        savetmsmatchdata: { name: 'SaveTmsMatchData', type: 'string' },
        addtolerancesavings: { name: 'AddToleranceSavings', type: 'string' },
        runpomatch: { name: 'RunPoMatch', type: 'string' }
    }
  };

  emitDataType(data: any){
    console.log(data)
    if(data == 'AccountConfig'){
        this.config = {
            fields: {
              active: {name: 'Active', type: 'number'},
              currency: { name: 'Currency', type: 'string' },
              overchargeamount: { name: 'OverchargeAmount', type: 'string' },
              overchargetype: { name: 'OverchargeType', type: 'string' },
              underchargeamount: { name: 'UnderchargeAmount', type: 'string' },
              underchargetype: { name: 'UnderchargeType', type: 'string' },
              runaudit: { name: 'RunAudit', type: 'string' },
              runtmsmatch: { name: 'RunTmsMatch', type: 'string' },
              savetmsmatchdata: { name: 'SaveTmsMatchData', type: 'string' },
              addtolerancesavings: { name: 'AddToleranceSavings', type: 'string' },
              runpomatch: { name: 'RunPoMatch', type: 'string' }
          }
        }
    }

    if(data == 'InvoiceRule'){
      this.config = {
        fields: {
          priority: {name: 'Active', type: 'number'},
          resultaction: { name: 'ResultAction', type: 'string' },
          reasoncode: { name: 'ReasonCode', type: 'string' },
          actioncommentstemplate: { name: 'ActionCommentsTemplate', type: 'string' },
          webresallocation: { name: 'WebResAllocation', type: 'string' },
          validategolivedate: { name: 'ValidateGoLiveDate', type: 'string' },
          validatepdfprovided: { name: 'ValidatePdfProvided', type: 'string' },
          validatefield: { name: 'ValidateField', type: 'string' },
          validatebalancecheck: { name: 'ValidateBalanceCheck', type: 'string' },
          compareproperties: { name: 'CompareProperties', type: 'string' },
        }
      }
    }


    this.currentConfig = this.config;
  }

}
