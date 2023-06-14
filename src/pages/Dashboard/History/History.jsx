import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get("https://summer-camp-server-moktubat.vercel.app/payments");
      const sortedHistory = response.data.sort((a, b) => b.date - a.date);
      setPaymentHistory(sortedHistory);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mx-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Payment History</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {paymentHistory.map((payment) => (
            <tr key={payment._id}>
              <td className="border px-4 py-2">{payment.email}</td>
              <td className="border px-4 py-2">{payment.transactionId}</td>
              <td className="border px-4 py-2">${payment.price}</td>
              <td className="border px-4 py-2">
                {new Date(payment.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
