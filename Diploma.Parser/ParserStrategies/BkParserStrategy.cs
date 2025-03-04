using System.Collections.ObjectModel;
using Diploma.API.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Diploma.Parser.ParserStrategies;

public class BkParserStrategy : IParserStrategy<BkCupon>
{
    public Task<List<BkCupon>> GetElementsList(string elementsClassName, ChromeDriver driver, string imagePageLink = "")
    {
        List<BkCupon> cuponsList = new List<BkCupon>();
        
        ReadOnlyCollection<IWebElement> cuponsListMarkup = driver.FindElements(By.ClassName(elementsClassName));
        
        foreach (IWebElement element in cuponsListMarkup)
        {
            cuponsList.Add(new BkCupon()
            {
                Title = element.FindElement(By.ClassName("bk-coupon-item__title")).Text,
                ImageUrl = element.FindElement(By.ClassName("image-placeholder__img")).GetAttribute("src"),
                Price = element.FindElement(By.ClassName("bk-coupon-item__price")).Text,
            });
        }
        return Task.FromResult(cuponsList);
    }
}