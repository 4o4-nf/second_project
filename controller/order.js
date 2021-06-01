const { Order, ProductCart } = require("../models/order");

exports.getOrderById = (res, req, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No order found in DB",
        });
      }
      res.order = order;
      next();
    });
};

//Create order
exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save order in DB",
      });
    }
    res.json(order);
  });
};

//Get all orders
exports.getAllOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found in DB",
        });
      }
      res.json(orders);
    });
};

//Order Status

exports.getOrderStatus = (req, res) => {
    res.json(Order.schema.path("status").enumValues);
}

exports.updateStatus = (req, res) => {
    Order.update(
        {_id: req.body.orderId},
        {$set: {status: req.body.status}},
        (err, order) => {
            if(err){
                return res.status(400).json({
                    error: "Cannot update order status"
                })
            }
            res.json(order);
        }
    )
}