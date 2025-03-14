using System.Collections.ObjectModel;
using Diploma.Parser.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Diploma.Parser.ParserStrategies;

public class BkParserStrategy : IParserStrategy<BkCupon>
{
    private List<BkCupon> CuponsList { get;} = new();

    public Task<List<BkCupon>> GetElementsList(string elementsClassName, ChromeDriver driver)
    {
        ReadOnlyCollection<IWebElement> cuponsListMarkup = driver.FindElements(By.ClassName(elementsClassName));
        
        foreach (IWebElement element in cuponsListMarkup)
        {
            CuponsList.Add(new BkCupon()
            {
                Title = element.FindElement(By.ClassName("bk-coupon-item__title")).Text,
                ImageUrl = element.FindElement(By.ClassName("image-placeholder__img")).GetAttribute("src"),
                Price = element.FindElement(By.ClassName("bk-coupon-item__price")).Text,
            });
        } 
        return Task.FromResult(CuponsList);
    }
}