/**
 * Registry for custom widgets.
 *
 * The widget is identified by its id. The id is associated
 * with the field in the schema.json.
 */
import { DefaultWidgetRegistry } from 'ngx-schema-form';
import {RowLayoutComponent} from './widgets/row-layout/row-layout.component';
import {GridComponent} from './widgets/grid.component/grid.component';
import {TableComponent} from './widgets/table/table.component';
import {StringComponent} from './widgets/string/string.component';
import {SelectComponent} from './widgets/select/select.component';
import {CheckboxComponent} from './widgets/checkbox.component/checkbox.component';
import {IntegerComponent} from './widgets/integer/integer.component';
import {RadioComponent} from './widgets/radio/radio.component';
import { Injectable } from '@angular/core';
import {EnableWhenSourceComponent} from './widgets/enable-when-source/enable-when-source.component';
import {EnableOperatorComponent} from './widgets/enable-operator/enable-operator.component';
import {LeftLabelFormGroupComponent} from './widgets/left-label-form-group/left-label-form-group.component';
import {SideLabelCheckboxComponent} from './widgets/side-label-checkbox/side-label-checkbox.component';
import {EnablewhenAnswerCodingComponent} from './widgets/enablewhen-answer-coding/enablewhen-answer-coding.component';
import {LabelRadioComponent} from './widgets/label-radio/label-radio.component';
import {EnableBehaviorComponent} from './widgets/enable-behavior/enable-behavior.component';
import {BooleanRadioComponent} from './widgets/boolean-radio/boolean-radio.component';
import {UnitsComponent} from './widgets/units/units.component';
import {TotalScoreComponent} from './widgets/total-score/total-score.component';
import {AnswerOptionComponent} from './widgets/answer-option/answer-option.component';
import {InitialComponent} from './widgets/initial/initial.component';
import {HelpTextComponent} from './widgets/help-text/help-text.component';
import {TypeComponent} from './widgets/type/type.component';
import {StringWithCssComponent} from './widgets/string-with-css/string-with-css.component';
import {RestrictionsComponent} from './widgets/restrictions/restrictions.component';
import {RestrictionsOperatorComponent} from './widgets/restrictions-operator/restrictions-operator.component';


@Injectable()
export class LformsWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register('row-layout',  RowLayoutComponent);
    this.register('grid', GridComponent);
    this.register('table', TableComponent);
    this.register('string', StringComponent);
    this.register('select', SelectComponent);
    this.register('checkbox', CheckboxComponent);
    this.register('boolean', CheckboxComponent);
    this.register('integer', IntegerComponent);
    this.register('number', IntegerComponent);
    this.register('radio', RadioComponent);
    this.register('lb-radio', LabelRadioComponent);
    this.register('enable-when-source', EnableWhenSourceComponent);
    this.register('enable-operator', EnableOperatorComponent);
    this.register('left-label-form-group', LeftLabelFormGroupComponent);
    this.register('left-label-checkbox', SideLabelCheckboxComponent);
    this.register('enable-when-answer-choice', EnablewhenAnswerCodingComponent);
    this.register('enable-behavior', EnableBehaviorComponent);
    this.register('boolean-radio', BooleanRadioComponent);
    this.register('units', UnitsComponent);
    this.register('totalScore', TotalScoreComponent);
    this.register('type', TypeComponent);
    this.register('answer-option', AnswerOptionComponent);
    this.register('initial', InitialComponent);
    this.register('help-text', HelpTextComponent);
    this.register('string-with-css', StringWithCssComponent);
    this.register('restrictions', RestrictionsComponent);
    this.register('restrictions-operator', RestrictionsOperatorComponent);
  }
}
