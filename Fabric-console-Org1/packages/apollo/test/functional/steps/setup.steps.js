/*
 * Copyright contributors to the Hyperledger Fabric Operations Console project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
/* eslint-disable new-cap */

const { When, Then } = require('cucumber');
const { element, by, browser } = require('protractor');

When(/^I proceed to the console$/, async() => {
	let link = element(by.partialLinkText('Proceed to'));
	await link.click();
});

Then(/^wait (?:'|")(.*?)(?:'|") seconds$/, async seconds => {
	await browser.sleep(Number(seconds) * 1000);
});

Then(/^refresh page/, async() => {
	await browser.refresh();
	await browser.sleep(5 * 1000);
});
