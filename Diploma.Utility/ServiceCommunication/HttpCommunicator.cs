namespace Diploma.Utility.ServiceCommunication;

public class HttpCommunicator
{
    public async Task<HttpResponseMessage> Send(string url, string route)
    {
        HttpClient client = new HttpClient();
        client.BaseAddress = new Uri(url);
        HttpResponseMessage result = await client.SendAsync(new HttpRequestMessage(HttpMethod.Get, route));
        client.Dispose();
        return result;
    }
}