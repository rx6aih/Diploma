using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Diploma.Parser.Interfaces;

public interface IParserStrategy<T>
{
    Task<ChromeDriver> BuildDriver(string url, string[] options = null){       
        ChromeOptions chromeOptions = new ChromeOptions();
        foreach(string option in options)
            chromeOptions.AddArguments(option);
        
        chromeOptions.AddArguments("no-sandbox");
        
        ChromeDriver driver = new ChromeDriver(ChromeDriverService.CreateDefaultService(),chromeOptions, TimeSpan.FromSeconds(120));
        driver.Navigate().GoToUrl(url);
        return Task.FromResult(driver);
    }
    Task<List<T>> GetElementsList(string elementsClassName, ChromeDriver driver);
}