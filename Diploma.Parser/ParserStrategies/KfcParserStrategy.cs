using System.Collections.ObjectModel;
using Diploma.API.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Diploma.Parser.ParserStrategies;

public class KfcParserStrategy : IParserStrategy<KfcCupon>
{

    public Task<ChromeDriver> BuildDriver(string url, string[] options = null)
    {
        ChromeOptions chromeOptions = new ChromeOptions();
        foreach(string option in options)
            chromeOptions.AddArguments(option);
        
        ChromeDriver driver = new ChromeDriver(chromeOptions);
        driver.Navigate().GoToUrl(url);
        return Task.FromResult(driver);
    }

    public Task<List<KfcCupon>> GetElementsList(string elementsXPath, ChromeDriver driver, string imagePageLink = "")
    {
        List<KfcCupon> cuponsList = new List<KfcCupon>();
        
        WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(30));
        ReadOnlyCollection<IWebElement> cuponsListMarkup = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.PresenceOfAllElementsLocatedBy(
            By.XPath("//*[@id=\"root\"]/div/div[2]/div[2]/div[1]/a")));
        foreach(IWebElement cupon in cuponsListMarkup)
            cuponsList.Add(new KfcCupon()
            {
                
            });
        return Task.FromResult(cuponsList);
    }
}