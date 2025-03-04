using System.Collections.ObjectModel;
using Diploma.API.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Diploma.Parser.ParserStrategies;

public class MacParserStrategy : IParserStrategy<MacCupon>
{
    public Task<List<MacCupon>> GetElementsList(string elementsClassName, ChromeDriver driver)
    {
        List<MacCupon> cuponsList = new List<MacCupon>();
        
        WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
        ReadOnlyCollection<IWebElement> cuponsListMarkup = wait.Until(
            SeleniumExtras.WaitHelpers.ExpectedConditions.PresenceOfAllElementsLocatedBy(
                By.ClassName(elementsClassName)));

        foreach (IWebElement element in cuponsListMarkup)
        {
            cuponsList.Add(new MacCupon()
            {
                ImageUrl = element.FindElement(By.ClassName("img-fluid")).GetAttribute("src"),
                Title = element.GetAttribute("title")
            });
        }
        return Task.FromResult(cuponsList);
    }
}

