namespace Diploma.Utility.ServiceCommunication;

public class HttpCommunicator
{
    public async Task<HttpResponseMessage> Send(string url, string route, HttpMethod method)
    {
        HttpClient client = new HttpClient();
        client.BaseAddress = new Uri(url);
        HttpResponseMessage result = await client.SendAsync(new HttpRequestMessage(method, route));
        client.Dispose();
        return result;
    }

    public async Task<HttpResponseMessage> Send(string url, string route, HttpMethod method, HttpContent content)
    {
        HttpClient client = new HttpClient();
        client.BaseAddress = new Uri(url);
        HttpRequestMessage request = new HttpRequestMessage(method, route);
        request.Content = content;
        
        HttpResponseMessage result = await client.SendAsync(request);
        client.Dispose();
        return result;
    }

}