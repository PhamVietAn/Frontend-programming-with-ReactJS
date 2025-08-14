enum WeekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

console.log("📅 Các ngày trong tuần:");
for (const day in WeekDays) {
    console.log(WeekDays[day as keyof typeof WeekDays]);
}
