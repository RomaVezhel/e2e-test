
const log4js = require("log4js");
const logger = log4js.getLogger('SpecLogger')

fdescribe('Reporting', function () {

    it('should report passed test', async function () {
        logger.debug('I am passed!')
    })

    it('should report failed test', async function () {
        logger.error('I am failed!')
        throw new Error('Test failed error')
    });

    // (it('should report skipped test', async function () {
    //     logger.debug('You should not see this')
    // }) as any).pend('This is skip reason')

})



// onPrepare: async function () {
//     logger.info('On prepare started')
//
//     // Adding nice console output.
//     // Provided by: https://github.com/razvanz/jasmine2-reporter
//     let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter
//     let console_reporter_options = {
//         startingSpec: true,
//         failuresSummary: false
//     }
//     jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options))
//
//
//     // XML REPORT
// //     // To view XML https://github.com/lukejpreston/xunit-viewer
// //     // sudo xunit-viewer --results=1.xml --output=./     //  -   берет XML файлы и рисует по ним HTML
// //
// //     let reporters = require('jasmine-reporters');          //  - репортер для вывода ресультата в папку
// //     let junitReporter = new reporters.JUnitXmlReporter({
// //         savePath: `${__dirname}/xml`,
//         consolidateAll: false
//     });
//     jasmine.getEnv().addReporter(junitReporter)
//
//
//     // Allure results. After XML generated - need to generate HTML
//     // npm install -g allure-commandline
//     // allure generate --clean
//     let AllureReporter = require('jasmine-allure-reporter');
//     jasmine.getEnv().addReporter(new AllureReporter({
//         resultsDir: 'allure-results'
//     }));
//
//
//     // REPORT PORTAL
//     jasmine.getEnv().addReporter(agent.getJasmineReporter());
//
// },
//
// // RP hack to finish correctly. This will wait for RP to finish all http requests
// afterLaunch: () => {
//     return agent.getExitPromise();
// }
// }

