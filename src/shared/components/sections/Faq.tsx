import { Box, Grid, Typography } from '@mui/material';
import ContentWrapper from '../ContentWrapper';
import FaqItem from '../FaqItem';
const Faqs1 = [
  {
    question: 'Ai có thể tham gia khóa học và thi chứng chỉ 建築施工管理技士?',
    answer: (
      <Box>
        Bất kỳ kỹ sư, kiến trúc sư, hoặc người có bằng chuyên ngành xây dựng – kiến trúc, tốt nghiệp
        tại Việt Nam hoặc Nhật Bản đều có thể đăng ký. Nếu bạn đang làm việc trong lĩnh vực kỹ thuật
        xây dựng tại Nhật, bạn hoàn toàn đủ điều kiện tham gia.
      </Box>
    ),
  },

  {
    question: 'Chứng chỉ 建築施工管理技士 là gì?',
    answer: (
      <Box>
        建築施工管理技士 (Kenchiku Sekō Kanri Gishi) là chứng chỉ hành nghề thi công xây dựng do Bộ
        Đất đai, Hạ tầng, Giao thông và Du lịch Nhật Bản (国土交通省) cấp. Chứng chỉ này công nhận
        năng lực chuyên môn và pháp lý của người làm trong lĩnh vực thi công, quản lý công trình xây
        dựng tại Nhật. Người có chứng chỉ được phép giám sát, quản lý, chỉ đạo thi công và đứng tên
        phụ trách kỹ thuật trong các dự án xây dựng. 🧩 Chứng chỉ gồm 2 cấp độ:
        <Box component='ul'>
          <Typography component='li'>
            1級建築施工管理技士 (Cấp 1): Cho phép quản lý các công trình lớn, phức tạp, có giá trị
            hợp đồng cao. Là cấp độ cao nhất, được nhiều kỹ sư hướng tới.
          </Typography>
          <Typography component='li'>
            2級建築施工管理技士 (Cấp 2): Dành cho người mới vào nghề, hoặc quản lý các công trình
            vừa và nhỏ. Là bước đệm để tiến tới cấp 1.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    question: 'Thi chứng chỉ này có khó không?',
    answer: (
      <Box>
        <Box mb={4}>
          Kỳ thi 建築施工管理技士 (Kỹ sư quản lý thi công xây dựng) được đánh giá là tương đối khó,
          đặc biệt với người nước ngoài — nhưng hoàn toàn có thể vượt qua nếu có lộ trình học đúng
          cách.Kỳ thi gồm 2 giai đoạn:
        </Box>
        <Box component='ol'>
          <Typography component='li'>
            🧠 Kỳ thi lý thuyết (一次検定) – thi trắc nghiệm 100%
          </Typography>
          <Typography component='li'>
            🛠 Kỳ thi viết tự luận (二次検定) – gồm phần viết tự luận + trắc nghiệm.
          </Typography>
        </Box>
        <Box>⚙️ Mức độ khó:</Box>
        <Box component='ul'>
          <Typography component='li'>
            2級 (Cấp 2): Mức độ trung bình, thích hợp cho người 1-2 năm ít kinh nghiệm.
          </Typography>
          <Typography component='li'>
            1級 (Cấp 1): Khó hơn nhiều, đòi hỏi vừa có kiến thức, vừa có kinh nghiệm ước tính 3 năm
            trở lên.
          </Typography>
        </Box>
        <Box mt={5}>🏆 Thực tế tại CCJ:</Box>
        <Typography>
          Nhiều học viên người Việt của chúng tôi bắt đầu từ con số 0, chỉ sau 3–4 tháng ôn tập bài
          bản đã đỗ kỳ thi １級建築施工管理技士 一次検定.
        </Typography>
        <Typography>
          → Không quá khó, nếu bạn có phương pháp học đúng và được hướng dẫn bởi người có kinh
          nghiệm.
        </Typography>
      </Box>
    ),
  },
  {
    question: 'Thời gian học và thi kéo dài bao lâu?',
    answer: (
      <Box>
        <Typography mb={5}>
          Thông thường, thời gian học và thi kéo dài từ 3 đến 5 tháng, tùy theo cấp độ và lịch học
          của học viên.
        </Typography>
        <Typography>🧭 Cụ thể:</Typography>
        <Typography>🔹 Đối với 2級建築施工管理技士:</Typography>
        <Box component='ul'>
          <Typography component='li'>Thời gian học trung bình: 3～6 tháng</Typography>
          <Typography component='li'>
            ① 一次検定 (thi lý thuyết) – tổ chức khoảng tháng 6 và tháng 11 ② 二次検定 (thi thực
            hành) – tổ chức khoảng tháng 11 (có thể thi chung 一次+二次 trong 1 ngày)
          </Typography>
        </Box>
        <Typography>🔹 Đối với 1級建築施工管理技士:</Typography>
        <Box component='ul'>
          <Typography component='li'>Thời gian học trung bình: 3～6 tháng</Typography>
          <Typography component='li'>
            Gồm 2 giai đoạn thi: ① 一次検定 (thi lý thuyết) – tổ chức khoảng tháng 6-7 ② 二次検定
            (thi thực hành) – tổ chức khoảng tháng 10–11
          </Typography>
        </Box>
        <Typography>💡 Tại CCJ (ví dụ cho website):</Typography>
        <Box component='ul'>
          <Typography component='li'>
            Khóa học được thiết kế 8～14 buổi, kéo dài khoảng 2～4 tháng, linh hoạt cho người đang
            làm việc tại Nhật.
          </Typography>
          <Typography component='li'>
            Có thể bắt đầu học trước kỳ thi 3–6 tháng để đạt kết quả tốt nhất.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    question: 'Có thể học online không?',
    answer: (
      <Box>
        <Typography>🔹 1. Học trực tuyến qua ZOOM</Typography>
        <Box component='ul'>
          <Typography component='li'>Tham gia lớp học trực tuyến với giáo viên.</Typography>
          <Typography component='li'>
            Có thể đặt câu hỏi, tương tác và giải đề ngay trên buổi học.
          </Typography>
          <Typography component='li'>Lịch học vào mỗi chủ nhật hằng tuần.</Typography>
          <Typography component='li'>
            Học viên được tạo tài khoản riêng để luyện các đề thi thật, có giải thích chi tiết.
          </Typography>
        </Box>
        <Typography>🔹 2. Khóa luyện đề trực tuyến trên web</Typography>
        <Box component='ul'>
          <Typography component='li'>
            Học viên được tạo tài khoản riêng để luyện các đề thi thật, có giải thích chi tiết
          </Typography>
          <Typography component='li'>
            Có thể học mọi lúc, mọi nơi, chỉ cần điện thoại hoặc máy tính.
          </Typography>
        </Box>
        <Typography>🔹 3. Khóa học qua Video (Hybrid)</Typography>
        <Box component='ul'>
          <Typography component='li'>
            Vừa luyện đề online, vừa được xem video bài giảng đã ghi lại từ lớp ZOOM.
          </Typography>
          <Typography component='li'>
            Tiết kiệm thời gian, nhưng vẫn nắm vững kiến thức và cách làm bài.
          </Typography>
          <Typography component='li'>
            Học viên được tạo tài khoản riêng để luyện các đề thi thật, có giải thích chi tiết.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    question: 'Khóa học 建築施工管理技士 được giảng dạy bằng tiếng gì?',
    answer: (
      <Box component='ul'>
        <Typography component='li'>
          🧩 Bài giảng: Giải thích rõ ràng bằng song ngữ tiếng Việt và tiếng Nhật chuyên ngành.
        </Typography>
        <Typography component='li'>
          📘 Bài tập và tài liệu ôn luyện: Đều có song ngữ, giúp bạn vừa học kiến thức, vừa nâng cao
          tiếng Nhật chuyên ngành xây dựng.
        </Typography>
        <Typography component='li'>
          👨‍🏫 Giáo viên: Có kinh nghiệm thực tế trong ngành và hiểu rõ khó khăn của người Việt khi
          học chứng chỉ tại Nhật.
        </Typography>
      </Box>
    ),
  },
];
const Faqs2 = [
  {
    question: 'Thủ tục đăng kí cần những gì?',
    answer: (
      <Box component='ul'>
        <Typography component='li'>
          Giấy 住民票（じゅうみんひょう） （bắt buộc phải có số juumin 住民票コード）
        </Typography>
        <Typography component='li'>
          Bằng đại học ở Việt Nam hoặc nước ngoài (bản gốc) + Bản dịch từ tiếng Việt sang Nhật
        </Typography>
        <Typography component='li'>Bảng điểm + Bản dịch từ tiếng Việt sang Nhật</Typography>
        <Typography component='li'>Giấy cam kết sự thật được tải trên trang đăng k</Typography>
        <Typography component='li'>Bộ hồ sơ đã mua</Typography>
        <Typography component='li'>Ảnh thẻ</Typography>
      </Box>
    ),
  },
  {
    question: 'Làm bài tập ôn như thế nào  ?',
    answer: <Box>Sẽ dùng mail đăng kí của các bạn để mở tài khoản đăng kí tài khoản premium</Box>,
  },
  {
    question: 'Học có chắc chắn đậu không ?',
    answer: (
      <Box>
        <Typography>
          Giảng viên sẽ hỗ trợ bạn tận tình nhất có thể, một phần học viên phải bài tập về nhà
        </Typography>
        <Typography>Nếu bạn làm đầy đủ bài tập thì bạn sẽ chắc chắn đậu.</Typography>
        <Typography>
          * Chỉ có bên mình mới đầu tư trang web cho các bạn làm bài tập, các trường và trung tâm
          khác chưa làm được.
        </Typography>
      </Box>
    ),
  },
  {
    question: 'Học có mẹo gì không ?',
    answer: <Box>Có , Trong quá trình học sẽ dần dần hiểu.</Box>,
  },
  {
    question: 'Học viết tự luận em ngại quá, kanji em không biết gì ?',
    answer: (
      <Box>
        Có form viết sẵn, các bạn chỉ cần luyện viết đi viết lại, vào phòng thi chỉ là chép vào thôi
        và làm chút biến đổi.
      </Box>
    ),
  },
  {
    question: 'Có thể học online không?',
    answer: (
      <Box>
        🏗️ 1. Được công nhận là kỹ sư quản lý thi công chuyên nghiệp tại Nhật
        <Box component='ul'>
          <Typography component='li'>
            Có đủ chuyên môn, kỹ năng và tư cách pháp lý để tham gia quản lý công trình xây dựng
          </Typography>
          <Typography component='li'>
            Có thể đảm nhiệm các vị trí như: 👉 Chỉ huy trưởng công trình (現場監督) 👉 Quản lý tiến
            độ, chất lượng, an toàn lao động 👉 Hỗ trợ lập hồ sơ thi công, nghiệm thu, báo cáo kỹ
            thuật.
          </Typography>
        </Box>
        💼 2. Mở rộng cơ hội nghề nghiệp và tăng thu nhập
        <Box component='ul'>
          <Typography component='li'>
            Chứng chỉ được Bộ Đất đai, Hạ tầng, Giao thông và Du lịch Nhật Bản (国土交通省) công
            nhận.
          </Typography>
          <Typography component='li'>
            Là điều kiện cần để làm việc tại các công ty xây dựng lớn (ゼネコン).
          </Typography>
          <Typography component='li'>
            Nhiều doanh nghiệp Nhật ưu tiên hoặc bắt buộc nhân viên có chứng chỉ này cho vị trí quản
            lý.
          </Typography>
        </Box>
        🌏 3. Tăng uy tín nghề nghiệp & cơ hội làm việc lâu dài tại Nhật
        <Box component='ul'>
          <Typography component='li'>
            Là bằng chứng thể hiện năng lực kỹ thuật và khả năng tiếng Nhật chuyên ngành.
          </Typography>
          <Typography component='li'>
            Giúp bạn chuyển đổi tư cách lưu trú sang kỹ sư (技術・人文・国際) dễ dàng hơn.
          </Typography>
          <Typography component='li'>Điểm cộng cho các bạn muốn lấy Vĩnh trú. </Typography>
        </Box>
      </Box>
    ),
  },
];
function Faq() {
  return (
    <ContentWrapper
      py={{
        xs: 10,
        md: 20,
      }}
    >
      <Typography variant='h1' textTransform='uppercase' textAlign='center' mb={12}>
        Câu hỏi thường gặp
      </Typography>

      <Grid
        container
        rowSpacing={3.5}
        columnSpacing={{
          xs: 4,
          md: 8,
          lg: 12,
        }}
        alignItems='flex-start'
      >
        <Grid container spacing={3.5} size={{ xs: 12, md: 6 }}>
          {Faqs1.map((faq, index) => (
            <Grid key={index} size={12}>
              <FaqItem item={faq} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3.5} size={{ xs: 12, md: 6 }}>
          {Faqs2.map((faq, index) => (
            <Grid key={index} size={12}>
              <FaqItem item={faq} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}

export default Faq;
