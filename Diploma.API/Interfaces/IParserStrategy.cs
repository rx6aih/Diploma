using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Diploma.API.Interfaces;

public interface IParserStrategy<T>
{
    Task<ChromeDriver> BuildDriver(string url, string[] options = null);
    Task<List<T>> GetElementsList(string elementsXPath, ChromeDriver driver, string imagePageLink = "");
}