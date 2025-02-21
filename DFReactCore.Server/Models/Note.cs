namespace DFReactCore.Server.Models {
	public class Note {
		public int id { get; set; }
		public string? name { get; set; }
		public string? content { get; set; }
		public DateTime? created { get; set; }
		public DateTime? modified { get; set; }
		public string? user { get; set; }
	}
}
