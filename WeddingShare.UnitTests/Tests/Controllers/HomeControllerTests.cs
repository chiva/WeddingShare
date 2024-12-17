using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingShare.Controllers;
using WeddingShare.Enums;
using WeddingShare.Helpers;
using WeddingShare.UnitTests.Helpers;

namespace WeddingShare.UnitTests.Tests.Helpers
{
    public class HomeControllerTests
    {
        private readonly IConfigHelper _config = Substitute.For<IConfigHelper>();
        private readonly ISecretKeyHelper _secretKey = Substitute.For<ISecretKeyHelper>();
        private readonly IDeviceDetector _deviceDetector = Substitute.For<IDeviceDetector>();
        private readonly ILogger<HomeController> _logger = Substitute.For<ILogger<HomeController>>();
        
        public HomeControllerTests()
        {
        }

        [SetUp]
        public void Setup()
        {
        }

        [TestCase(DeviceType.Desktop, true, "", true)]
        [TestCase(DeviceType.Desktop, false, "", false)]
        [TestCase(DeviceType.Mobile, true, "", true)]
        [TestCase(DeviceType.Mobile, false, "", false)]
        [TestCase(DeviceType.Desktop, true, "123456", false)]
        [TestCase(DeviceType.Desktop, false, "Abc123!", false)]
        [TestCase(DeviceType.Mobile, true, "abc123!", false)]
        [TestCase(DeviceType.Mobile, false, "adsbsds", false)]
        public async Task HomeController_Index_ViewResult(DeviceType deviceType, bool singleGalleryMode, string secretKey, bool isRedirect)
        {
            _deviceDetector.ParseDeviceType(Arg.Any<string>()).Returns(deviceType);
            _config.GetOrDefault("Settings", "Single_Gallery_Mode", Arg.Any<bool>()).Returns(singleGalleryMode);
            _secretKey.GetGallerySecretKey(Arg.Any<string>()).Returns(secretKey);

            var controller = new HomeController(_config, _secretKey, _deviceDetector, _logger);
            controller.ControllerContext.HttpContext = new DefaultHttpContext()
            {
                Session = new MockSession()
            };

            var actual = await controller.Index();

            if (!isRedirect)
            {
                Assert.That(actual, Is.TypeOf<ViewResult>());
            }
            else
            { 
                Assert.That(actual, Is.TypeOf<RedirectToActionResult>());
            }
        }
    }
}