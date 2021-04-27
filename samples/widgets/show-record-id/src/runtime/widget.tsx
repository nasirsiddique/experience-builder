/**
  Licensing

  Copyright 2021 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import {React, AllWidgetProps, IMState} from 'jimu-core';

export interface Props {
  featureIds?: string
}

export default class Widget extends React.PureComponent<AllWidgetProps & Props>{
  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetProps
  ): Props => {
    return {
      featureIds: props?.mutableStateProps?.featureIds
    }
  }

  render(){
    const { featureIds } = this.props
    return <div>
      {featureIds ? featureIds : 'No records to display.'}
    </div>;
  }
}
