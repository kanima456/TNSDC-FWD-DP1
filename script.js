<!-- Footer -->
  <footer>
    <p>© 2025 My Portfolio | All Rights Reserved</p>
  </footer>

  <!-- JavaScript -->
  <script>
    function validateForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if(name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return false;
      }
      alert("Message sent successfully!");
      return true;
    }
  </script>
</body>
</html>
