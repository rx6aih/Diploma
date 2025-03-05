using System.Collections.ObjectModel;
using Diploma.API.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Diploma.Parser.ParserStrategies;

public class MacParserStrategy : IParserStrategy<MacCupon>
{
    private List<MacCupon> CuponsList { get; } = new();

    public Task<List<MacCupon>> GetElementsList(string elementsClassName, ChromeDriver driver)
    {
        
        WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(30));
        ReadOnlyCollection<IWebElement> cuponsListMarkup = wait.Until(
            SeleniumExtras.WaitHelpers.ExpectedConditions.PresenceOfAllElementsLocatedBy(
                By.ClassName(elementsClassName)));

        foreach (IWebElement element in cuponsListMarkup)
        {
            CuponsList.Add(new MacCupon()
            {
                ImageUrl = element.FindElement(By.ClassName("img-fluid")).GetAttribute("src"),
                Title = element.GetAttribute("title")
            });
        }
        return Task.FromResult(CuponsList);
    }
}

