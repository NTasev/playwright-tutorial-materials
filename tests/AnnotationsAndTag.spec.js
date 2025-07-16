import {test} from '@playwright/test'

//ANNOTATIONS
test.skip('Test one', async({page}) => {

});

test('not yet ready', async ({ page }) => {
   test.fail();
 });

 test.fixme('test to be fixed', async ({page}) => {
    //...
 });

 test('slow test', async ({page}) => { 
    test.slow();
 });

 test.only('focus this test', async ({page}) => {
    test.slow();
 });

 //TAGS
 test ('Test login page @smoke', async ({page}) => {
    //...
 });