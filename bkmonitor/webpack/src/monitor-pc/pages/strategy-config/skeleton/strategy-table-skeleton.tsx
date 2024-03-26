/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台 (BlueKing PaaS) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台 (BlueKing PaaS) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台 (BlueKing PaaS):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
import { Component, Prop } from 'vue-property-decorator';
import { Component as tsc } from 'vue-tsx-support';

import './strategy-table-skeleton.scss';

interface IProps {
  limit?: number;
}

@Component
export default class StrategyTableSkeleton extends tsc<IProps> {
  @Prop({ default: 10 }) limit: number;
  render() {
    return (
      <div class='strategy-table-skeleton'>
        <div class='container-01'>
          <div class='w-80 h-32 mr-8 skeleton-element'></div>
          <div class='w-108 h-32 mr-8 skeleton-element'></div>
          <div class='w--100 h-32 mr-8 flex-1 skeleton-element'></div>
        </div>
        <div class='w--100 h-20 mt-24 skeleton-element'></div>
        {new Array(this.limit > 20 ? 20 : this.limit).fill(null).map((_item, index) => (
          <div
            class='w--100 h-36 mt-26 skeleton-element'
            key={index}
          ></div>
        ))}
      </div>
    );
  }
}