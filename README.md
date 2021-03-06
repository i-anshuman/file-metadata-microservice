# file-metadata-microservice
APIs and Microservices Projects - File Metadata Microservice

<main>
      <header>
        <h1>API Project: File Metadata Microservice</h1>
      </header>
      <section>
        <h3>User Stories:</h3>
        <ol>
          <li>
            <p>I can submit a form object that includes a file upload.</p>
          </li>
          <li>
            <p>The from file input field has the <code>"name"</code> attribute set to <code>"upfile"</code>. We rely on this in testing.</p>
          </li>
          <li>
            <p>When I submit something, I will receive the file <code>name</code>, <code>type</code> and <code>size</code> in bytes within the JSON response.</p>
          </li>
        </ol>
      </section>
      <section>
        <h3>Example Usage:</h3>
        <ul>
          <li><p>Please upload a file.</p></li>
        </ul>
      </section>
      <section>
        <h3>Example Output:</h3>
        <ul>
          <li><p><code>{"name":"home.html","type":"text/html","size":2851}</code></p></li>
        </ul>
      </section>
      <section class="form">
        <form method="POST" action="/api/fileanalyse" enctype="multipart/form-data">
          <input type="file" name="upfile" id="fileInput" />
          <input type="submit" value="Upload" />
        </form>
      </section>
      <footer>
        <p>By <a href="https://www.freecodecamp.org/" target="__blank">freeCodeCamp</a></p>
        <p>
          <span>Check live on <a href="https://i-anshuman-file-metadata-microservice.glitch.me" target="__blank">Glitch</a></span>
          <span>Check source on <a href="https://github.com/i-anshuman/file-metadata-microservice" target="__blank">Github</a></span>
        </p>
      </footer>
    </main>
