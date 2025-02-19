using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DFReactCore.Server.Models;

namespace DFReactCore.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PizzaController : ControllerBase
    {
        private readonly ILogger<PizzaController> _logger;
        public PizzaController(ILogger<PizzaController> logger) {
			_logger = logger;
		}

        [HttpGet(Name = "GetPizza")]
        public IEnumerable<Pizza> Get() {
            IList<Pizza> pizzas = new List<Pizza>();
            pizzas.Add(new Pizza() {
                id = 1,
                name = "Cheese",
                description = "Plain Cheese"
            });
			pizzas.Add(new Pizza() {
				id = 2,
				name = "Pepperoni",
				description = "Pepperoni & Cheese"
			});
			pizzas.Add(new Pizza() {
				id = 3,
				name = "Supreme",
				description = "Supreme Pizza with Veggies, Meat, & Cheese"
			});

			return pizzas;
		}

		[HttpGet("{id:int}", Name = "GetPizzaByID")]
		public Pizza GetById(int id) {
			return new Pizza() {
				id = 1,
				name = "TestGetByID",
				description = "TestGetByID"
			};
		}

		[HttpPost(Name = "CreatePizza")]
		public Pizza Post(Pizza p) {
			return p;
		}

		[HttpPut(Name = "UpdatePizza")]
		public Pizza Put(Pizza p) {
			return p;
		}

		[HttpDelete(Name = "DeletePizza")]
		public int Delete(Pizza p) {
			return p.id;
		}
	}
}
