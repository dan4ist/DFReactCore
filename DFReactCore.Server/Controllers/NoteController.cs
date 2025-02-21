using DFReactCore.Server.Libraries;
using DFReactCore.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DFReactCore.Server.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class NoteController : ControllerBase {
		private readonly ILogger<NoteController> _logger;
		private NoteLibrary nl;
		public NoteController(ILogger<NoteController> logger) {
			_logger = logger;
		}

		[HttpGet(Name = "GetNotes")]
		public IEnumerable<Note> Get() {
			IList<Note> notes = new List<Note>();
			

			return notes;
		}

		[HttpGet("{id:int}", Name = "GetNoteByID")]
		public Note GetById(int id) {
			return new Note() {
				id = 1,
				name = "TestGetByID",
				content = "TestGetByID"
			};
		}

		[HttpPost(Name = "CreateNote")]
		public Note Post(Note n) {
			return n;
		}

		[HttpPut(Name = "UpdateNote")]
		public Note Put(Note n) {
			return n;
		}

		[HttpDelete(Name = "DeleteNote")]
		public int Delete(Note n) {
			return n.id;
		}
	}
}
