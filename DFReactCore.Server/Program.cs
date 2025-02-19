//^^    1 (CORS SETUP 1/2/3) -- NEED ACTUAL URL INSTEAD OF EXAMPLE.COM
//string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
//^^

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//^^    2
//builder.Services.AddCors(options => {
//    options.AddPolicy(name: MyAllowSpecificOrigins,
//        builder => {
//            builder.WithOrigins("http://example.com", "*");
//        });
//});
//^^

var app = builder.Build();

//^^    3
//app.UseCors(MyAllowSpecificOrigins);
//^^

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
