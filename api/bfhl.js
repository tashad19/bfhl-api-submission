export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ is_success: false, message: "Only POST requests are allowed" });
  }

  let inputData;

  try {
    // Case 1: Normal JSON body (with header)
    if (req.body && req.body.data) {
      inputData = req.body.data;
    }
    // Case 2: If req.body is a string (header missing, raw body)
    else if (typeof req.body === "string") {
      const parsed = JSON.parse(req.body);
      inputData = parsed.data;
    }
    // Case 3: If raw body is buffered (some environments send it that way)
    else if (req.body && Buffer.isBuffer(req.body)) {
      const parsed = JSON.parse(req.body.toString());
      inputData = parsed.data;
    } else {
      throw new Error("Invalid request format");
    }

    if (!Array.isArray(inputData)) {
      throw new Error("data must be an array");
    }
  } catch (err) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input. Expected { data: [...] }",
    });
  }

  // 🔹 Replace these with your actual details
  const FULL_NAME = "tashadur_rahman";   // lowercase
  const DOB = "19022004";         // ddmmyyyy
  const EMAIL = "tashadurrahman2024@gmail.com";
  const ROLL_NUMBER = "22BRS1304";

  let oddNumbers = [];
  let evenNumbers = [];
  let alphabets = [];
  let specialChars = [];
  let sum = 0;

  inputData.forEach((item) => {
    if (/^-?\d+$/.test(item)) {
      const num = parseInt(item, 10);
      if (num % 2 === 0) {
        evenNumbers.push(item.toString());
      } else {
        oddNumbers.push(item.toString());
      }
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      specialChars.push(item);
    }
  });

  // 🔹 Concatenate alphabets in reverse order with alternating caps
  let concatString = alphabets.join("");
  concatString = concatString
    .split("")
    .reverse()
    .map((ch, idx) =>
      idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    )
    .join("");

  return res.status(200).json({
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
    special_characters: specialChars,
    sum: sum.toString(),
    concat_string: concatString,
  });
}
