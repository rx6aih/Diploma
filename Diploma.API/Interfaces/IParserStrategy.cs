using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Diploma.API.Interfaces;

public interface IParserStrategy<T>
{
    Task<ChromeDriver> BuildDriver(string url, string[] options = null){       
        ChromeOptions chromeOptions = new ChromeOptions();
        foreach(string option in options)
            chromeOptions.AddArguments(option);
        
        ChromeDriver driver = new ChromeDriver(chromeOptions);
        driver.Navigate().GoToUrl(url);
        return Task.FromResult(driver);
    }
    Task<List<T>> GetElementsList(string elementsClassName, ChromeDriver driver);
}