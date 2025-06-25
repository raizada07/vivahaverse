{["destination", "mehandi", "sangeet", "haldi", "reception", "traditional"].map((item, i) => (
  <motion.div
    key={i}
    className="bg-background p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    onClick={() => setSelectedService(item)}
  >
    <h3 className="text-xl font-semibold font-heading capitalize">
      {item.replace(/^\w/, (c) => c.toUpperCase())} Service
    </h3>
  </motion.div>
))}
