using System.Collections.ObjectModel;
using Diploma.API.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Diploma.Parser.ParserStrategies;

public class KfcParserStrategy : IParserStrategy<KfcCupon>
{
    private List<KfcCupon> CuponsList { get; } = new();
    public Task<List<KfcCupon>> GetElementsList(string elementsClassName, ChromeDriver driver)
    {
        
        WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(30));
        ReadOnlyCollection<IWebElement> cuponsListMarkup = wait.Until(
            SeleniumExtras.WaitHelpers.ExpectedConditions.PresenceOfAllElementsLocatedBy(
            By.ClassName(elementsClassName)));
        
        foreach (IWebElement element in cuponsListMarkup)
        {
            string link = element.FindElement(By.ClassName("_3nVETUX19Kp")).GetAttribute("style");
            string fullDescription = element.FindElement(By.ClassName("_3POebZQSBG9")).Text;
            
            CuponsList.Add(new KfcCupon()
            {
                Title = element.FindElement(By.ClassName("_2pr76I4WPmJ")).Text,
                ImageUrl = link.Substring(23, link.Length-26),
                Description = fullDescription,
                Url = element.GetAttribute("href"),
                Price = element.FindElement(By.ClassName("_1trEHSCHMhK")).FindElement(By.TagName("span")).Text
            });
        }
        return Task.FromResult(CuponsList);
    }
}