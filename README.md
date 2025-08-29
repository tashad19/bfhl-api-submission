# BFHL API – Vercel Deployment

This is a simple REST API built for the **BFHL assignment**.
The API accepts an array of mixed values (numbers, alphabets, special characters) and returns:

* User details (user\_id, email, roll number)
* Odd and even numbers
* Alphabets (in uppercase)
* Special characters
* Sum of numbers (as string)
* Concatenation of alphabets in reverse order with alternating capitalization

---

## 🚀 Hosted API

**Endpoint**:

```
POST https://bfhl-api-submission-mu.vercel.app/bfhl
```

---

## 📌 Example

### Request

```bash
curl -X POST https://bfhl-api-submission-mu.vercel.app/bfhl \
-H "Content-Type: application/json" \
-d '{"data":["a","1","334","4","R","$"]}'
```

### Response

```json
{
  "is_success": true,
  "user_id": "tashadur_rahman_19022004",
  "email": "tashadurrahman2024@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

## 🛠️ Tech Stack

* Node.js (serverless function)
* Vercel (deployment)

---

## 📂 Project Structure

```
bfhl-api/
 ├─ api/
 │   └─ bfhl.js      # main API function
 ├─ package.json
 └─ vercel.json      # optional routing config
```


   ```
   https://<your-vercel-app>.vercel.app/bfhl
   ```


