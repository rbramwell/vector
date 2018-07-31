/**!
 *
 *  Copyright 2015 Netflix, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 *
 */

/* eslint-disable */

import { flatten } from '../processors/utils'

// all the remaining components, particularly vector specific angular components
function requireAll(requireContext) {
  const validKeys = requireContext.keys().filter(f => f !== './index.js')
  const requires = validKeys.map(requireContext)
  return Array.isArray(requires) ? requires : [requires]
}

const requires = requireAll(require.context('./', false, /\.js$/))
const charts = requires.map(r => r.default).reduce(flatten, [])

export default charts

// TODO make transforms a bit more consistent (take a list of metric names etc) and document them
// TODO add chart formatting (round, percent) and vertical axis scale options
// TODO custom chart modal needs dropdown selector for the metric
// TODO add vertical axis settings to custom chart
// TODO set up url # parameter and parser to allow reconstruction of by sharing links
// TODO black dots when hovering over chart show up in the wrong spot for area charts
// TODO chart legends / click to show and hide
// TODO add bcc graphs
// TODO add flame graphs
// TODO extract out a StatusBar component
// TODO bug why does the network packets chart explode when a container selection is made - looks like network packets filter is actually container aware
// TODO when changing ip address, refresh container list
// TODO enable vertical resize
