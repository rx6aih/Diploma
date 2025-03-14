using System.ComponentModel.DataAnnotations;
using Diploma.Parser.Interfaces;
using Diploma.DAL.Entities.Abstract;
using Diploma.Parser.Configurations;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Diploma.Parser.Implementations;

public class Parser<T>([Required]IParserStrategy<T> parserStrategy, 
    CuponConfiguration configuration) where T : class 
{
    public async Task<List<T>> Parse()
    {
        ChromeDriver driver = await parserStrategy.BuildDriver(configuration.url, configuration.chromeOptions);
        return await parserStrategy.GetElementsList(configuration.cuponsClassName, driver);
    }
}