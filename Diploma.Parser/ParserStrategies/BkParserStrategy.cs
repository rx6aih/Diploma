using Diploma.API.Interfaces;
using Diploma.DAL.Entities.Implementations;
using OpenQA.Selenium.Chrome;

namespace Diploma.Parser.ParserStrategies;

public class BkParserStrategy : IParserStrategy<BkCupon>
{
    public Task<List<BkCupon>> GetElementsList(string elementsXPath, ChromeDriver driver, string imagePageLink = "")
    {
        throw new NotImplementedException();
    }
}